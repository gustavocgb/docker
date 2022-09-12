const path = require('path') 
const fs = require('fs');
const FILE = path.resolve('./public/files/log_nomes.json')

module.exports = {

  async readAllJson() {
    const readAllFile = () => {
      return new Promise((resolve, reject) => {            
        try {
          let dataJson = null
          let dataRead = fs.readFileSync(FILE)
               
          if(dataRead.length > 0){
            dataJson = JSON.parse(dataRead)
          } else {
            dataJson = []
          }

          resolve(dataJson)

        } catch(e) {
          console.log(e)
          reject(e)
        }
      })
    }
    const file = await readAllFile()
    return file
  },

  async writeJson(props) {
    const writeFile = () => {
      const {name, date} = props      

      return new Promise(async (resolve, reject) => {            
        try {
          let dataJson = await this.readAllJson()
          let addNewObj = true
  
          if(dataJson){
            for(let obj of dataJson){
              if(obj.name === name) {
                obj.date = date 
                addNewObj = false
              }
            }
          }
  
          if(addNewObj) {
            dataJson.push(props)
          }
  
          json = JSON.stringify(dataJson)
          fs.writeFileSync(FILE, json, 'utf8')          
          resolve(dataJson)

        } catch(e) {
          console.log(e)
          reject(e)
        }
      })
    }
    await writeFile()
  },
  
  

}

