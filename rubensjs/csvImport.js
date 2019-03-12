define(['util/util'], function (util) {


    return {
        data: null,

        line: [],

        ret: [],

        //max: 0,

        //min: Infinity,

        //firstLine: null,

        transpose: function(ar){
            var lines = [];

            // For all lines
            ar.forEach( (l, n) => { 

                // For all columns
                l.forEach( (k, m) => { 
                        
                    if (!lines[m]) { 
                        lines[m] = []
                    }               
                        
                    lines[m].push(k)
                })

            })

            return lines                  
        },

        parse: function (data, del) {

            var my = this            

            this.data = util.splitQuotedBy(data, "\n")

            // Not used
            //this.originalData = this.data.concat();

            // make array
            this.ret = [];
            this.data.forEach(function (o) {

                var fs = util.splitQuotedBy(o, del, true)

                if(typeof fs[0] == 'undefined') return

                my.line = []
                var f2 = ''

                fs.forEach(function (f, i) {

                    var f2 = f.replace(/[,]/g, ""),
                         v = f2
                        
                    my.line.push({ index: i, value: f, numeric: !isNaN(v) });

                })
                if (my.line.length > 0)
                    my.ret.push(my.line);
            })
            
            // Add missing top left if any if all rows but the first have same number of fields
            if (this.ret.length > 2 && false) {
            
                var l = this.ret[1].length,
                    pass = false;


                    console.log(this.ret[0].length, this.ret[1].length)
                if(this.ret[0].length != this.ret[1].length)
                    pass = true
                
                if(pass){
                    for (var c = this.ret[0].length; c < this.ret[1].length; c++) {
                        this.ret[0].unshift({ index: 0, value: '' })
                    }                
                }
            }

            return this.ret;
        }
    }
})