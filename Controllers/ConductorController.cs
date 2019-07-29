using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoSegundo.Models;

namespace ProyectoSegundo.Controllers {
    [Route ("api/[controller]")]
    [ApiController]

    public class ConductorController : ControllerBase {
        private readonly BaseContext _context;
        public ConductorController (BaseContext context) {
            _context = context;
            if (_context.Conductores.Count () == 0) {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Conductores.Add (new Conductor
                 { Identificacion = "100123", NombreCompleto = "Carlos Andres Rodriguez Pozo", 
                 PrimerNombre="Carlos",
                 SegundoNombre="Andres",
                 PrimerApellido="Rodriguez",
                 SegundoApellido="Pozo",
                 NumLicencia = "123124", Telefono = "3006124234", Asignado="No Asignado"});
                _context.SaveChanges ();
            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Conductor>>> GetConductores () {
            return await _context.Conductores.ToListAsync ();
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<Conductor>> GetConductor (int id) {
            var Item = await _context.Conductores.FindAsync (id);
            if (Item == null) {
                return NotFound ();
            }
            return Item;
        }

        
        [HttpPost]
        public async Task<ActionResult<Conductor>> PostConductor (Conductor item) {

              _context.Conductores.Add (item);
            await _context.SaveChangesAsync ();
            return CreatedAtAction (nameof (GetConductores), new { id = item.id }, item);
               
        }

        // PUT: api/Task/5
        [HttpPut ("{id}")]
        public async Task<IActionResult> PutConductor (int id, Conductor item) {
            if (id != item.id) {
                return BadRequest ();
            }
            _context.Entry (item).State = EntityState.Modified;
            await _context.SaveChangesAsync ();
            return NoContent ();
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteConductor (int id) {
            var Conductor = await
            _context.Conductores.FindAsync (id);
            if (Conductor == null) {
                return NotFound ();
            }

            _context.Conductores.Remove (Conductor);
            await _context.SaveChangesAsync ();
            return NoContent ();
        }

    }
}