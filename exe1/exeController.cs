using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace exe1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class exeController : ControllerBase
    {
        // GET: api/exe
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Welcome.The functions name are: \n " + Environment.NewLine +
                "repetitions  " +
                "backwards  " +
                "cutoff  " +
                "maxnum  " +
                "allnums"
                };
        }

        // GET: api/exe/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/exe
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        //exe6
        //get api/exe/repetitions
        [HttpGet("repetitions")]
        public int repetitions(string str)
        {
            if (str == null)
                return -1;
            Dictionary<string, int> dic = new Dictionary<string, int>();

            string[] sepWords = str.Split(' ');
            foreach (string word in sepWords)
            {
                if (dic.ContainsKey(word))
                    dic[word]++;
                else dic[word] = 1;
            }

            return dic.Values.Max();
        }

        //exe11
        //get api/exe/backwards
        [HttpGet("backwards")]
        public string backwards(string str)
        {
            if (str != null)
            {
                char[] chararray = str.ToCharArray();
                Array.Reverse(chararray);
                string output = new string(chararray);
                return output;
            }
            return "no input detected.please try again";
        }

        //exe12
        //get api/exe/cutoff
        [HttpGet("cutoff")]
        public string cutoff(string str)
        {
            if (str != null)
            {
                string newString = str.Remove(str.Length-1,1);
                newString = newString.Remove(0, 1);
                return newString;
            }
            return "no input detected.please try again";
        }

        //exe15
        //get api/exe/maxnum
        [HttpGet("maxnum")]
        public int maxnum(int x,int y,int z)
        {
            if (x >= y && x >= z)
                return x;
            if (y >= x && y >= z)
                return y;
            if (z >= x && z >= y)
                return z;


            return -111111111;
        }

        //exe19
        //get api/exe/allnums x>0
        [HttpGet("allnums")]
        public string allnums(int x)
        {
            if (x < 0)
                return "number has to be greater then 0";
            string str="";

            for(int i=x-1;i>0;i--)
            {
                string num = i.ToString();
                str += num;
                str += ",";
            }
            str = str.Remove(str.Length - 1, 1);
            str = backwards(str);
            return str;
        }

        // PUT: api/exe/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
