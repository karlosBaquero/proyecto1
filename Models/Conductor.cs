using Newtonsoft.Json;
///<Summary>
///d
/// </Summary>
///
namespace ProyectoSegundo.Models
{
public class Conductor
{
    [JsonProperty("id")]
    public int id { get; set; }
    [JsonProperty("identificacion")]
    public string Identificacion { get; set; }
    [JsonProperty("nombre_Completo")]
        public string NombreCompleto{get;set;}      
        [JsonProperty("primer_Nombre")]
        public string PrimerNombre{get;set;}
        [JsonProperty("segundo_Nombre")]
        public string SegundoNombre{get;set;}
        [JsonProperty("primer_Apellido")]
        public string PrimerApellido{get;set;}
        [JsonProperty("segundo_Apellido")]
        public string SegundoApellido{get;set;}
    [JsonProperty("numLicencia")]
    public string NumLicencia { get; set; }
    [JsonProperty("telefono")]
    public string Telefono { get; set; }
       [JsonProperty("asignado")]
    public string Asignado { get; set; }


}

}