import React from 'react'
import Card from './Card'
function App() {

  let data = [
    {
      plan:"FREE",
      price:0,
      user:"Single User",
      isUser:true,
      storage:"50GB Storge",
      isStorage:true,
      publice:"Unlimited Public Projects",
      isPublic:true,
      community:"Community Access",
      isCommunity:true,
      private:"Unlimited Private Projects",
      isPrivate:false,
      support:"Dedicated Phone Support",
      isSupport:false,
      subDomain:"Free Subdomain",
      isSubDomain:false,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"PLUS",
      price:9,
      user:"5 User",
      isUser:true,
      storage:"50GB Storge",
      isStorage:true,
      publice:"Unlimited Public Projects",
      isPublic:true,
      community:"Community Access",
      isCommunity:true,
      private:"Unlimited Private Projects",
      isPrivate:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"PRO",
      price:49,
      user:"Unlimited User",
      isUser:true,
      storage:"150GB Storge",
      isStorage:true,
      publice:"Unlimited Public Projects",
      isPublic:true,
      community:"Community Access",
      isCommunity:true,
      private:"Unlimited Private Projects",
      isPrivate:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomains",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:true
    }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
    {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
    }
    </div>
  </div>
</section>
  </>
}

export default App
