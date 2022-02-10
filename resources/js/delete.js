    $(function() {
      $('.delete').click(function(){
          Swal.fire({
          title: confrimDelete,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Tak, usuń to!',
          cancelButtonText: 'Nie, anuluj!'
        }).then((result) => {
          if (result.value) {
            $.ajax({
              method: "DELETE",
              url: deleteUrl + $(this).data("id")
            })
             .done(function(data) {
               window.location.reload();
              })         
             .fail(function(data) {
               Swal.fire('error' , data.responseJSON.message, data.responseJSON.status);
                
                });
                 }
                }) 
              });
                }); 
              