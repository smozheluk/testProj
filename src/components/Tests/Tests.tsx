import React from "react";

export const Tests = () => {

    //@ts-ignore
    class Samurai {
        constructor(name: string) {
            //@ts-ignore
            this.name = name
        }
        hello() {
            //@ts-ignore
            alert(this.name)
        }
    }

    let shogun = new Samurai("Asoka")
    //@ts-ignore
    console.log(shogun.__proto__.__proto__.__proto__)

    return (
        <div>
           test
        </div>
    )
}