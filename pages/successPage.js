import React from 'react';
import Link from 'next/link'

export default function successPage(props) {
    return (
        <div className="thank_you_message">
            <h1>Thank you for buying with us</h1>
            <Link href="/"><button>Close</button></Link>
        </div>
    );
}
