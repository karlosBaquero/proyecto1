using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoSegundo.Models;

namespace ProyectoSegundo.Controllers {
    [Route ("api/[controller]")]
    [ApiController]

    public class CarteraController : ControllerBase {
        private readonly BaseContext _context;
        public CarteraController (BaseContext context) {
            _context = context;
            if (_context.Carteras.Count () == 0) {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.SaveChanges ();
            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cartera>>> GetCarteras () {
            return await _context.Carteras.ToListAsync ();
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<Cartera>> GetCartera (int id) {
            var Item = await _context.Carteras.FindAsync (id);
            if (Item == null) {
                return NotFound ();
            }
            return Item;
        }

        [HttpPost]
        public async Task<ActionResult<Cartera>> PostCartera (Cartera item) {
            _context.Carteras.Add (item);
            await _context.SaveChangesAsync ();
            return CreatedAtAction (nameof (GetCarteras), new { id = item.id }, item);
        }

        // PUT: api/Task/5
        [HttpPut ("{id}")]
        public async Task<IActionResult> PutCartera (int id, Cartera item) {
            if (id != item.id) {
                return BadRequest ();
            }
            _context.Entry (item).State = EntityState.Modified;
            await _context.SaveChangesAsync ();
            return NoContent ();
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteCartera (int id){
             var Cartera = await
            _context.Carteras.FindAsync (id);
            if (Cartera == null) {
                return NotFound ();
            }
 
            _context.Carteras.Remove (Cartera);
            //_context.Abonos.RemoveRange(_context.Abonos.Where(b =>b.CarteraId.Equals(Cartera.id)).ToList());
             _context.SaveChanges(); 
             
            return NoContent ();  
        }

    }
}