import React,{useState} from 'react'
import Banana from "../images/banana.jpg";
import Strawberry from "../images/strawberry.jpg";
import Broccoli from "../images/broccoli.jpg";
import Spinach from "../images/spinach.jpg";


function Cards() {
    const cards  = [
        {
            id : 1,
            imgUrl : <img style={{width:'100%'}} src={Banana}></img>,
            name : "Banana",
            price : "$100/each",
          
        },
        {
          id : 2,
          imgUrl : <img style={{width:'100%'}} src={Strawberry}></img>,
          name : "Strawberry",
          price : "$100/each",
        
      },
      {
          id : 3,
          imgUrl : <img style={{width:'100%'}} src={Broccoli}></img>,
          name : "Broccoli",
          price : "$100/each",
        
      },
      {
          id : 4,
          imgUrl : <img style={{width:'100%'}} src={Spinach}></img>,
          name : "Spinach",
          price : "$100/each",
        
      },
      
      
      ]
      const [number,setNumber] = useState(0)
      const plus =()=>setNumber(number +1)
      const minus =()=>{if(number>0){
          setNumber(number-1)
      }}

      const content = cards.map((card=>(
          <div key={card.id} style={{width:'45%',height:'400px',display:'flex',flexDirection:'column',justifyContent:'space-between',boxShadow:'0px 0px 4px gray ',marginBottom:'10%'}}>
          <div style={{fontWeight:'bolder', margin:'auto',width:'80%',height:'60%'}}> {card.imgUrl}</div>
          <div style={{fontWeight:'bolder', height:'8%',marginTop:'2%',textAlign:'center'}}>{card.name}</div>
          <div style={{fontWeight:'bolder', height:'8%',marginTop:'2%',textAlign:'center'}}>{card.price}</div>
          <div style={{fontWeight:'bolder', display:'flex',height:'8%',margin:'auto',marginTop:'2%'}}>
             <button style={{border:'none', width:'30%', borderRadius:'200%', }} onClick={minus}>-</button>
             <div style={{width:'100px',height:'30px',display:'flex', justifyContent:"center", alignItems:'center', textAlign:'center',background:'#EDF5E4',margin:'0px 3px'}}>{number}</div>
             <button style={{border:'none', width:'30%', borderRadius:'200%', }} onClick={plus}>+</button>

         </div>
         <div style={{width:'100%', padding:'3px 0', height:'8%',color:'white',background:'#55DB52',fontWeight:'bold',display:'flex',alignItems:'center',justifyContent:'center'}}>Add to cart</div>

          </div>
      )))

      
    return(
        <div style={{display:'flex',width:'80%',justifyContent:'space-between',flexBasis:'45%',flexWrap:'wrap',margin:'auto'}}>
            {content}
        </div>
    )
}

export default Cards;