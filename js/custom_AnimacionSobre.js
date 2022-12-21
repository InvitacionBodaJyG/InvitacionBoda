
      

      function cerrarModal() {
        $("#myModal").modal('hide');//ocultamos el modal
        $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
        $('.modal-backdrop').remove();//eliminamos el backdrop del modal
      }

      $(document).ready(function(){
        $("#myModal").modal('show');
      });