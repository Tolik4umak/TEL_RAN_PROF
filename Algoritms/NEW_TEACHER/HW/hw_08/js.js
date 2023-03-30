

class Person{
  constructor(name){
    this.name = name
    this.m = null
    this.f = null
  }
}

class FamylyFree{
  constructor(person){
    this.person = person
    this.output = ''
  }

  showFamyly(){
    let output = ''
    this._showFamyly(this.person)
    this.show2(this.person, '')
    output = this.output
    this.output = ''
    return output
  }

  _showFamyly(person){

    this.output += person.name

    if(person.m !== null || person.f !== null){
      this.output += ' ( '

      if(person.m !== null){
        this._showFamyly(person.m)
      }else{
        this.output += 'null'
      }

      this.output += ' ; '

      if(person.f !== null){
        this._showFamyly(person.f)
      }else{
        this.output += 'null'
      }

      this.output += ' ) '
    }

  }

  show2(person , space){

    if(person !== null){
      document.write(`${space}${person.name} <br>`)
      this.show2(person.m,space + ' .')
      this.show2(person.f,space + ' .')
    }
    
  }
  
}


let me = new Person('Me')
me.m = new Person("Mother")
me.f = new Person("Fateher")

me.m.m = new Person('M Mother')
me.m.m.m = new Person('M M Mother')
me.m.m.f = new Person('M M Father')
me.m.f = new Person('M Father')
me.m.f.f = new Person('M F Father')

me.f.m = new Person('F Mother')
me.f.f = new Person('F Father')
me.f.f.f = new Person('F F Father')

let myTree = new FamylyFree(me)



console.log(myTree.showFamyly())




