using Microsoft.EntityFrameworkCore;
namespace ProyectoSegundo.Models
{
public class BaseContext : DbContext
{
public BaseContext(DbContextOptions<BaseContext> options) :
base(options)
{
}
public DbSet<Abono> Abonos { get; set; }
public DbSet<Cartera> Carteras { get; set; }
public DbSet<Conductor> Conductores { get; set; }
public DbSet<Vehiculo> Vehiculos {get;set;}
public DbSet<Propietario> Propietarios {get;set;}
}
}