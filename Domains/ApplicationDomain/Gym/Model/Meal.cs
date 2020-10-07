using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model
{
    public class Meal
    {
        public string Title { set; get; }
        public IEnumerable<string> Menu { set; get; }
        public IEnumerable<string> Notes { set; get; }
        public int Calo { set; get; }
        public Meal() { }
        public Meal(string title, string menu, string note, int calo)
        {
            this.Title = title;
            this.Menu = JsonConvert.DeserializeObject<List<string>>(menu);
            this.Notes = JsonConvert.DeserializeObject<List<string>>(note);
            this.Calo = calo;
        }
    }
}
