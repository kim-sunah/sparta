var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname.split("")[0];
    },

    
    getFirstName: () => {
        // return this.fullname.split('')[0];
    },

    //함수 선언 방식이 잘못되었습니다.
    //full
    getLastName: (function() {
        // return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName(),'vs',fighter.getFirstName());
// console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName());