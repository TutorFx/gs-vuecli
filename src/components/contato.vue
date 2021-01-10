<template id="contato">
    <div class="bg-secondary py-5" id="section4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3">
            <p class="text-uppercase text-primary">Vamos trocar uma ideia</p>
            <h2 class="text-light bold mb-3">Deixe sua mensagem que eu te respondo!</h2>
            <p class="text-light">É só se identificar, eu estou disponível para conversar todos os dias da semana. gostaria de fazer um orçamento?</p>
          </div>
          <div class="col-12 col-lg-9">
            <form action="">
              <div class="row mb-4">
                <div class="col form-group">
                  <label for="exampleInputNome1">Nome</label>
                  <input type="Nome" class="form-control" id="exampleInputNome1" aria-required="true" placeholder="Nome">
                </div>
                <div class="col form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-required="true" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="col-12 text">
                  <label for="exampleInputMessage1">Mensagem</label>
                  <textarea cols="10" rows="4" name="message" class="form-control" aria-required="true" aria-invalid="false" placeholder="Mensagem" required="" spellcheck="false" data-gramm="false"></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>