<template>
    <div className="form">
        <h2>Login</h2>
        <form onSubmit="{onSubmit}">
            <input placeholder="Email" type="email" ref="{emailRef}" />
            <input placeholder="Password" type="password" ref="{psdRef}" />
            <button type="submit">Sign In</button>
            <p onClick="{forgotPasswordHandler}">Forgot Password?</p>
        </form>
    </div>
</template>
