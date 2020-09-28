import React from 'react'

export default function Footer() {
    return (
        <footer className="text-muted py-5">
            <div className="container">
                <p className="float-right mb-1">
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a href="#">Back to top</a>
                </p>
                <p className="mb-1">This portfolio was created with HTML5, CSS3, JS(ES6), and React</p>
                <p className="mb-1">Copyright &copy; 2020, Anthony Yip</p>
            </div>
        </footer>
    )
}
