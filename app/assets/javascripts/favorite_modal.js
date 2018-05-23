$(function(){
  $('.save-button').on('click', function(){
    $('.favorite-modal-wrapper').removeClass('favorite-modal');
  });

  $('.favorite-close-button').on('click', function(){
    $('.favorite-modal-wrapper').addClass('favorite-modal');
  });

  // $(window).load(function () {
  //   $('.create-favorite').on('click', function(){
  //     $(this).removeClass('create-favorite');
  //     $(this).addClass('delete-favorite');
  //     $(this).find('.favorite-heart').attr("style", "color: red;")
  //     var favoriteFolderId = $(this).data('id');
  //     var roomId = $('.s-main').data('roomId');
  //     $.ajax ({
  //       url: `/rooms/${roomId}/favorite_folders/${favoriteFolderId}/favorites`,
  //       type: 'POST',
  //       dataType: 'json'
  //     })
  //   });
  // });

  // $(window).load(function () {
  //   $('.delete-favorite').on('click', function(){
  //     $(this).addClass('create-favorite');
  //     $(this).removeClass('delete-favorite');
  //     $(this).find('.favorite-heart').attr("style", "color: black;")
  //     var favoriteFolderId = $(this).data('id');
  //     var roomId = $('.s-main').data('roomId');
  //     $.ajax ({
  //       url: `/rooms/${roomId}/favorite_folders/${favoriteFolderId}/favorites`,
  //       type: 'DELETE',
  //       dataType: 'json'
  //     })
  //   });
  // });

  $('.favorite-item').on('click', function(){
    if ($(this).hasClass('delete-favorite')) {
      $(this).removeClass('delete-favorite');
      $(this).find('.favorite-heart').attr("style", "color: black;")
      var favoriteFolderId = $(this).data('id');
      var roomId = $('.s-main').data('roomId');
      $.ajax ({
        url: `/rooms/${roomId}/favorite_folders/${favoriteFolderId}/favorites`,
        type: 'DELETE',
        dataType: 'json'
      })
    } else {
      $(this).addClass('delete-favorite');
      $(this).find('.favorite-heart').attr("style", "color: red;")
      var favoriteFolderId = $(this).data('id');
      var roomId = $('.s-main').data('roomId');
      $.ajax ({
        url: `/rooms/${roomId}/favorite_folders/${favoriteFolderId}/favorites`,
        type: 'POST',
        dataType: 'json'
      })
    }
  });

});
