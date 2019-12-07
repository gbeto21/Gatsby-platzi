import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra exitosa</h2>
        <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
        <p>¡Te esperamos de vuelta, no pares de aprender!</p>
        <span role="img" aria-label="emoji">
          ❤
        </span>
        <Link to="/">
          <Button>Voler al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
