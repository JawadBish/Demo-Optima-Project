import React from 'react'

const MainPage = () => {

  const goToAccount = () => {
    window.location = '/customer-accounts';
}

    return (
        <div>
           
    <div className="main-optima-page">
      <div className="optima-section-top-container">
            <div className="optima-section-main">
      <h1>Optima Demo</h1>
    <h2> Optima SAAS</h2>
      <p>Software as a Service has a lot to offer.<br/>
       If it’s used properly, it can help your business save money, time, and human resources. <br/>
       By eliminating problems like software maintenance and incompatibility, SaaS can provide streamlined focus and greater productivity</p>

       <button className="default-button" onClick={goToAccount}> Register Now!</button>
      </div>
    <div className="boxes">
    <div className="box">
    <h1>Cost</h1>
    <p>SaaS can provide notable savings for several different reasons. Foremost, it eliminates the upfront cost of purchase/installation, as well on-going costs like maintenance and upgrades. Instead of spending large amounts of money on hardware installations, SaaS applications can be easily downloaded and maintained. Furthermore, pay-as-you-go models allow businesses to pay for only what they are using and not pay heavily on un-used licensing. SaaS can be especially advantageous for small businesses because it provides access to expensive, high-powered software that might have been otherwise unobtainable through conventional purchasing methods. Also, the subscription based method eliminates the extreme financial risk of expensive software</p>
    </div>
    <div className="box">
    <h1>Time</h1>
    <p>Many people say “time is money” and thankfully, SaaS can save both. For many SaaS applications, installation is as simple as having an internet connection and acquiring a log-in. Furthermore, maintenance responsibilities are shifted from your IT department to the vendor itself. This eliminates extra work hours and downtime that might have been necessary to upgrade conventional software. Finally, SaaS apps tend to have a smaller learning curve which means quicker adoption across your workforce</p>
    </div>
    <div className="box">
    <h1>Scalability And Accessibility</h1>
    <p>Another great feature of SaaS is that the pay-as-you-go model provides fantastic flexibility and options. Because the software is hosted externally by a vendor, changing your usage plan is easy and can be done without advance notice. Additionally, web-based use allows subscribers to access the software easily from any location with internet capabilities</p>
    </div>
    <div className="box">
    <h1>Compatibility</h1>
    <p>With the conventional software installation method, updates can require enormous amounts of time and money. Even worse, version discrepancies between members of your workforce can lead to compatibility issues and wasted time. With SaaS however, subscribers can simply log-on to already upgraded services.</p>
    </div>
    </div>
</div>

    </div> 
        </div>
    )
}

export default MainPage
