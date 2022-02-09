products = [
    {
      pid: 100,
      p_name: "samsungA52",
      band: "5g",
      price: 30000,
      display: "amoled",
    },
    {
      pid: 101,
      p_name: "samsungf41",
      band: "4g",
      price: 15000,
      display: "amoled",
    },
    {
      pid: 102,
      p_name: "mi10promax",
      band: "4g",
      price: 19000,
      display: "amoled",
    },
    { pid: 103, p_name: "mi11lite", band: "5g", price: 22000, display: "led" },
    {
      pid: 104,
      p_name: "iphone12pro",
      band: "5g",
      price: 80000,
      display: "amoled",
    },
    { pid: 105,
       p_name: "realme",
        band: "4g",
         price: 12000,
          display: "led"
         },
  ]
  /////////////////////////////////////////////////////////////////

  //printing all product names



  // var p_name, prname={}
  // for(let product of products){
  //   let p_Name=product["p_name"]
  //   console.log(p_Name);
  // }

  //or
  // products.forEach(p=>console.log(p.p_name))
 
 //printing all mobike details whose display is amoled



  // var  prname={}
  //  for(let product of products){
  //    if(product["display"]=="amoled"){
  //      console.log(product);
  //    }
  //  }

  //or

  // products.filter(p=>p.display=="amoled").forEach(p=>console.log(p.p_name))


//printing 5g mobile names
  //  var  prname={},p_name
  //  for(let product of products){
  //    if(product["band"]=="5g"){
  //           let p_Name=product["p_name"]
  //   console.log(p_Name);
  //    }
  //  }

//filtering mobiles based on price
  // console.log(Object.entries(products).sort((r1,r2)=>r2[3]-r1[3]));

  //or

  // product.sort((p1,p2)=>p2.price-p1.price).foreach(p=>console.log(p))



  //costly mobile printing

  // var costly_mobile=products.map(p=>p.price).reduce((amt1,amt2)=>amt1>amt2?amt1:amt2)
  // console.log(costly_mobile);

  //low cost mobile printing

  // var cheapest=products.reduce((p1,p2)=>p1<p2?p1:p2)
  // console.log(cheapest);