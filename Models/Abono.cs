using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace ProyectoSegundo.Models
{
public class Abono
{
    [JsonProperty("id")]
    public int id { get; set; }
    [JsonProperty("carteraId")]
    public int CarteraId { get; set; }
    [JsonProperty("valor")]
    public int Valor { get; set; }
    [JsonProperty("fecha")]
    public DateTime Fecha { get; set; }

}

}