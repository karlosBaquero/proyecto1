using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoSegundo.Models;

namespace ProyectoSegundo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AbonoController : ControllerBase
    {
        private readonly BaseContext _context;
        public AbonoController(BaseContext context)
        {
            _context = context;
            if (_context.Abonos.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.SaveChanges();
            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Abono>>> GetAbonos()
        {
            return await _context.Abonos.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Abono>> PostAbono(Abono item)
        {
            Cartera Cart = _context.Carteras.Find(item.CarteraId);
            if (Cart != null)
            {
                if (Cart.DeudaActual >= item.Valor)
                {
                    _context.Abonos.Add(item);
                    await _context.SaveChangesAsync();
                    return CreatedAtAction(nameof(GetAbonos), new { id = item.id }, item);
                }
            }

            return BadRequest();
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAbono(int id, Abono item)
        {
            if (id != item.id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAbono(int id)
        {
            var Abono = await
            _context.Abonos.FindAsync(id);
            if (Abono == null)
            {
                return NotFound();
            }

            _context.Abonos.Remove(Abono);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}