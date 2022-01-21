using System;

namespace Insulter
{
    class Program
    {
        static void Main (string[] args)
        {
        

            List <int> indexes = new List<int> (){} ;
//Javascrit .Length = C# .Count
            while (indexes.Count < 3){
             int Candidate = new Random().Next (0, insults.Count-1 );
     
               if (!indexes.Any( i => i == Candidate)) {
                 indexes.Add(Candidate);
                };
            };

            for (int i=0; i<indexes.Count; i++){
                int index = indexes[i];
                Console.WriteLine(insults[index]);
            };

            }

         }
}

