import React from 'react';
import './components.css'

const Navbar = () => {

    return (
        <>
        <div className= "logo"><img src="http://www.memuevo.cl/wp-content/themes/newmemuevo/img/logo.png" alt=""/></div>
        <div className="search-wrapper"><input 
        type="search" 
        className="search" 
        placeholder="Buscar"/>
        <i class="fa fa-search"></i>
          </div>
        <div className="container">
            <div className="row hidden-xs">
                <ul className="col-sm-5 col-md-4 col-lg-3 nav nav-pills nav-stacked" role="tablist">
                    <li className=""><a href="#tabs-1" role="tab" data-toggle="pill">Free Unlimited ATM Reimbursements</a>
                    </li>
                    <li><a href="#tabs-2" role="tab" data-toggle="pill">Free Cash Back Purchase Rewards</a>
                    </li>
                    <li><a href="#tabs-3" role="tab" data-toggle="pill">Free Online Banking</a>
                    </li>
                    <li><a href="#tabs-4" role="tab" data-toggle="pill">Free Mobile Banking</a>
                    </li>
                    <li><a href="#tabs-5" role="tab" data-toggle="pill">Free Mobile Depositdhfdhfdh</a>
                    </li>
                    <li><a href="#tabs-6" role="tab" data-toggle="pill">Free MyDepositggjg</a>
                    </li>
                    <li><a href="#tabs-7" role="tab" data-toggle="pill">Free Bill Payvnfjgjggfgfg</a>
                    </li>
                    <li><a href="#tabs-8" role="tab" data-toggle="pill">Free PopMoneyfhfhfhfh</a>
                    </li>
                    <li><a href="#tabs-9" role="tab" data-toggle="pill">Free FinanceWorks</a>
                    </li>
                    <li><a href="#tabs-10" role="tab" data-toggle="pill"> Overdraft Protection</a>
                    </li>
                    <li><a href="#tabs-11" role="tab" data-toggle="pill">No Overdraft Fees</a>
                    </li>
                    <li><a href="#tabs-12" role="tab" data-toggle="pill">Overdraft Line of Credit</a>
                    </li>
                </ul>
                <div className="col-sm-5 col-md-4 col-lg-5 well-sm tab-content">
                    <div className="tab-pane active" id="tabs-1">
                        <h2>Unlimited ATM Reimbursements</h2>
                        <p>At a hole-in-the-wall cash-only restaurant? On a road trip with friends? At a cash-only convenience store for a midnight snack? Ever had to walk 10 blocks to get to specific ATM? We won't tie you down. Use any ATM you want. We'll even automatically reimburse any X checking account ATM fees<sup><span stylename="line-height: 0.9em; font-size: 10pt;">1</span></sup> at the end of the month.</p>
                    </div>
                    <div className="tab-pane" id="tabs-2">
                        <h2>Cash Back Purchase Rewards</h2>
                        <p>Make your everyday purchases a little less painful. With your X checking account, you'll rack up rewards just by using your Visa&reg; Debit card.
                            <br></br>Personalized, cash back rewards. Nice.</p> <a href="/account-features#Get%20Cash%20Back">Learn More   »</a>
                    </div>
                    <div className="tab-pane" id="tabs-3">
                        <h2>Online Banking</h2>
                        <p>Take banking off of your chore list. Now you can do your banking from anywhere, anytime, for free. That's an easy way to keep your money and your time where it belongs - with you.</p> <a href="/account-features#Online Banking">Learn More   »</a>
                    </div>
                    <div className="tab-pane" id="tabs-4">
                        <h2>Mobile Banking</h2>
                        <p>Consider your phone to be your personal banker -its' got your banking needs covered. Deposit checks, transfer money, view your balance, track your spending habits, and pay your bills from your smartphone. Now you're <em>really</em> going to feel naked without it.</p> <a href="/account-features#Mobile Banking">Learn More   »</a>
                    </div>
                    <div className="tab-pane" id="tabs-5">
                        <h2>Mobile Deposit (Smartphone)</h2>
                        <p>No hoops to jump through. No envelopes to seal. Just grab your phone, take a quick picture of your check, and boom... You're good to go.</p> <a href="/account-features#Make a Deposit">Learn More   »</a>
                    </div>
                    <div className="tab-pane" id="tabs-6">
                        <h2>MyDeposit (PC)</h2>
                        <p>Never go into a bank again? Challenge accepted. No mailing, no envelopes, no trips to the ATM. Just use your computer and scanner to deposit checks straight into your account - for free.</p> <a href="/account-features#Make a Deposit">Learn More   »</a>
                    </div>
                    <div className="tab-pane" id="tabs-7">
                        <h2>Bill Pay</h2>
                        <p>Due dates got you down? Never stress about remembering to pay bills again.</p> <a href="/account-features#Pay Bills">Learn More   »</a>
                    </div>
                    <div className="tab-pane" id="tabs-8">
                        <h2>PopMoney</h2>
                        <p>Checks are so yesterday. Send, request, and receive money via email or text.</p> <a href="/account-features#Transfer Money">Learn More   »</a>
                    </div>
                    <div className="tab-pane" id="tabs-9">
                        <h2>FinanceWorks</h2>
                        <p>Crystal clear spending analysis. Sew up the hole in your pocket. Know where your money is going for once and for all.</p> <a href="/account-features#Manage Your Money">Learn More   »</a>
                    </div>
                    <div className="tab-pane" id="tabs-10">
                        <h2>Overdraft Protection</h2>
                        <p>Accidental overdraft? No problem, we will transfer funds for you from an enrolled linked account - free of charge. To set up: Simply log in to your account and send us a secure message indicating the last 5 digits of the two account numbers you would like to have linked together.</p>
                    </div>
                    <div className="tab-pane" id="tabs-11">
                        <h2>No Overdraft Fees</h2>
                        <p></p>
                        <p>It happens, we totally get it. If for whatever reason you're lacking the funds, whether we let the payment go through or not, we'll let it slide and not charge you for it.</p>
                    </div>
                    <div className="tab-pane" id="tabs-12">
                        <h2>Overdraft Line of Credit</h2>
                        <p>Want one? <a href="https://www.bankx.com/docs/default-source/online-banking-forms/overdraft-line-of-credit-application-and-disclosure.pdf?sfvrsn=14">Apply here</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
        </>

    )


}
export default Navbar;