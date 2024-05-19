<template>
  <header class="header">
    <main class="header_container">
      <h3 class="header_title">Api BCRA</h3>
      <h1 class="title">Los datos del BCRA</h1>
      <h2 class="subtitle">A un click de distancia</h2>
      <p class="text">
        El BCRA ha desarrollado su primera API pública y gratuita con el
        propósito de brindar un acceso de forma eficiente a toda la información
        que produce la insitución.
      </p>
      <p class="text">
        Este sitio fue creado con el propósito de ofrecer una interfaz fácil y
        sencilla para el acceso de los valores publicados por el BCRA.
      </p>

      <a
        class="link_bcra-informe"
        href="https://www.bcra.gob.ar/Noticias/primera-api-BCRA.asp"
        target="_blank">Informe del BCRA</a
      >
    </main>
  </header>
</template>

<style scoped>
  .header {
    margin-top: 13rem;
    width: 100%;
    height: 64vh;
  }

  .header_container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 85%;
    height: 100%;
    margin: 0 auto;
    gap: 1rem;
  }

  .header_title {
    color: var(--mint);
    font-weight: 600;
    font-size: calc(1.5rem + 0.3vw);
  }

  .title {
    color: var(--slate);
    font-weight: 800;
    font-size: calc(4rem + 3.5vw);
  }

  .subtitle {
    color: var(--grey);
    font-size: calc(3rem + 2.5vw);
  }

  .text {
    color: var(--white);
    line-height: 4rem;
    font-size: 2rem;
    max-width: 100rem;
    width: 100%;
  }

  .link_bcra-informe {
    color: var(--mint);
    border: 1px solid var(--mint);
    padding: 2rem;
    border-radius: 0.4rem;
  }

  @media (min-width: 768px) {
      .header{
        margin-top: 20rem;
      }
  }
</style>

