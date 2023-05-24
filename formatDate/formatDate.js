const formatDate = (date) => {


 let newDate = date.split('-')[2] + "." + date.split('-')[1] + "." + date.split('-')[0];
console.log(newDate.toString());
};


formatDate('2020-02-18')