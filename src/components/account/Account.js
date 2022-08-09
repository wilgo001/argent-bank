const Account = (props) => {
    const name = props.data.name;
    const amount = props.data.amount;
    const totalTransaction = props.data.totalTransaction;
    return(
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {name + '(x' + totalTransaction + ')'}</h3>
                <p className="account-amount">${amount}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default Account;