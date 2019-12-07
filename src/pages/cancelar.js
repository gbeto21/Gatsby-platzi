import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancelar() {
  return (
    <div>
      <SEO title="Compra exitosa" />
      <Purchase>
        <h2>Lamentamos la cancelación</h2>
        <p>Es triste que canceles la compra</p>
        <p>¡Pero descuida, siempre estaremos aquí para cuando regreses!</p>
        <span rol="img" aria-label="emoji">
          😉
        </span>
        <Link to="/">
          <Button>Voler al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
