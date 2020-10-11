using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationDomain.Gym.Model
{
    public class Meal
    {
        public string Title { set; get; }
        public string Menu { set; get; }
        public string Note { set; get; }
        public int Calo { set; get; }
        public Meal() { }
        public Meal(string title, string menu, string note, int calo)
        {
            this.Title = title;
            this.Menu = menu;
            this.Note = note;
            this.Calo = calo;
        }
    }
}
