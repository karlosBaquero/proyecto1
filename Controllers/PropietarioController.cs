using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoSegundo.Models;

namespace ProyectoSegundo.Controllers {
    [Route ("api/[controller]")]
    [ApiController]

    public class PropietarioController : ControllerBase {
        private readonly BaseContext _context;
        public PropietarioController (BaseContext context) {
            _context = context;
            if (_context.Propietarios.Count () == 0) {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Propietarios.Add(new Propietario{Identificacion = "123", 
                 NombreCompleto = "Juan Esteban Ramos Ariza", 
                 PrimerNombre="Juan",
                 SegundoNombre="Esteban",
                 PrimerApellido="Ramos",
                 SegundoApellido="Ariza", Telefono="3002145128"});
                _context.SaveChanges ();
            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Propietario>>> GetPropietarios () {
            return await _context.Propietarios.ToListAsync ();
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<Propietario>> GetPropietario (int id) {
            var Item = await _context.Propietarios.FindAsync (id);
            if (Item == null) {
                return NotFound ();
            }
            return Item;
        }

        [HttpPost]
        public async Task<ActionResult<Propietario>> PostPropietario (Propietario item) {
            _context.Propietarios.Add (item);
            await _context.SaveChangesAsync ();
            return CreatedAtAction (nameof (GetPropietarios), new { id = item.id }, item);
        }

        // PUT: api/Task/5
        [HttpPut ("{id}")]
        public async Task<IActionResult> PutPropietario (int id, Propietario item) {
            if (id != item.id) {
                return BadRequest ();
            }
            _context.Entry (item).State = EntityState.Modified;
            await _context.SaveChangesAsync ();
            return NoContent ();
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeletePropietario (int id) {
            var Propietario = await
            _context.Propietarios.FindAsync (id);
            if (Propietario == null) {
                return NotFound ();
            }

            _context.Propietarios.Remove (Propietario);
            await _context.SaveChangesAsync ();
            return NoContent ();
        }

    }
}