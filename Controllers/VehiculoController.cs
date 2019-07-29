using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoSegundo.Models;

namespace ProyectoSegundo.Controllers {
    [Route ("api/[controller]")]
    [ApiController]

    public class VehiculoController : ControllerBase {
        private readonly BaseContext _context;
        public VehiculoController (BaseContext context) {
            _context = context;
            if (_context.Vehiculos.Count () == 0) {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                // _context.Vehiculos.Add(new Vehiculo{Placa = "123",Marca="chevi",Modelo="1e",FechaAfiliacion="31/01/10",VehiculoId=0,PropietarioId=0});
                _context.SaveChanges ();
            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehiculo>>> GetVehiculos () {
            //   return await _context.Vehiculos.Include(t=>t.Vehiculo).Include(t=>t.Propietario).ToListAsync();
            return await _context.Vehiculos.ToListAsync ();
        }

        [HttpPost]
        public async Task<ActionResult<Vehiculo>> PostVehiculo (Vehiculo item) {
            _context.Vehiculos.Add (item);
            await _context.SaveChangesAsync ();

            return CreatedAtAction (nameof (GetVehiculos), new { id = item.id }, item);

        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<Vehiculo>> GetVehiculo (int id) {
            var Item = await _context.Vehiculos.FindAsync (id);
            if (Item == null) {
                return NotFound ();
            }
            return Item;
        }

        // PUT: api/Task/5
        [HttpPut ("{id}")]
        public async Task<IActionResult> PutVehiculo (int id, Vehiculo item) {
            if (id != item.id) {
                return BadRequest ();
            }
            _context.Entry (item).State = EntityState.Modified;
            await _context.SaveChangesAsync ();
            return NoContent ();
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteVehiculo (int id) {
            var Vehiculo = await
            _context.Vehiculos.FindAsync (id);
            if (Vehiculo == null) {
                return NotFound ();
            }

            _context.Vehiculos.Remove (Vehiculo);
            await _context.SaveChangesAsync ();
            return NoContent ();
        }

    }
}