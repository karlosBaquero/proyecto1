using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace ProyectoSegundo.Models
{
    public class Cartera
    {
        [JsonProperty("id")]
        public int id { get; set; }

        [JsonProperty("identificacion")]
        public string Identificacion_Cond { get; set; }

        [JsonProperty("DeudaActual")]
        public float DeudaActual { get; set; }

        [JsonProperty("DeudaInicial")]
        public float DeudaInicial { get; set; }

        [JsonProperty("FechaUltimoPago")]
        public DateTime FechaUltimoPago { get; set; }

        [JsonProperty("Estado")]
        public string Estado { get; set; }
        
        [JsonProperty("MesesPagados")]
        public int MesesPagados { get; set; }

        [JsonProperty("vehiculoId")]
        public int VehiculoId { get; set; }

        [JsonProperty("conductorId")]
        public int ConductorId { get; set; }
    }

}