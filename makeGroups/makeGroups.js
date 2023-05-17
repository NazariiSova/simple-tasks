const elementaryB = [];
const advancedC = [];

const oldData = [['Adam', 'Driver', elementaryB], ['Colin', 'Firth', advancedC], ['Johnny', 'Depp', elementaryB]];


function makeGroups(oldData) {
    let newData = {
        firstName: '',
        lastName: ''
    }
    for (let i = 0; i < oldData.length; i++) {
        if (oldData[i][2] === elementaryB) {
            elementaryB.push(newData.firstName = oldData[i][0]);
            elementaryB.push(newData.firstName = oldData[i][1]);
            
        } else {
            advancedC.push(newData.firstName = oldData[i][0]);
            advancedC.push(newData.firstName = oldData[i][1]);
            
        }
      
    }

};
makeGroups(oldData);