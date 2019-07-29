using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace ProyectoSegundo.Models {
    public class Vehiculo {
        [JsonProperty ("id")]
        public int id { get; set; }

        [JsonProperty ("placa")]
        public string Placa { get; set; }

        [JsonProperty ("marca")]
        public string Marca { get; set; }

        [JsonProperty ("modelo")]
        public string Modelo { get; set; }

        [JsonProperty ("fechaAfiliacion")]
        public DateTime FechaAfiliacion { get; set; }

        [JsonProperty ("propietarioId")]
        public int PropietarioId { get; set; }

        [JsonProperty ("conductorId")]
        public int ConductorId { get; set; }

    }
}