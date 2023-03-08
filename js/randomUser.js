$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        var user = data.results[0];
        var fullName = user.name.first + ' ' + user.name.last;
        var address = user.location.street.name + ' ' + user.location.street.number + ', ' + user.location.city + ', ' + user.location.state + ', ' + user.location.country;
        var phone = user.phone;
        var email = user.email;

        var imgSrc = user.picture.large;
        $('#profile-photo').attr('src', imgSrc);

        
        var Descripcion = document.querySelector('meta[name="description"]');
        Descripcion.setAttribute('content', fullName);

        var ogTitle = document.querySelector('meta[property="og:title"]');
        ogTitle.setAttribute('content', fullName);

        var ogImage = document.querySelector('meta[property="og:image"]');
        ogImage.setAttribute('content', imgSrc);


        var ogTwitterTitle = document.querySelector('meta[name="twitter:title"]');
        ogTwitterTitle.setAttribute('content', fullName);

        var ogTwitterDescription = document.querySelector('meta[name="twitter:description"]');
        ogTwitterDescription.setAttribute('content', fullName);

        var ogTwitterImage = document.querySelector('meta[name="twitter:image"]');
        ogTwitterImage.setAttribute('content', imgSrc);

        
        $('header h1').text(fullName);
        $('head title').text(fullName + " - Curriculum Vitae");
        $('header p:nth-of-type(1)').html('<i class="bi bi-geo-alt-fill"></i> Dirección: ' + address);
        $('header p:nth-of-type(2)').html('<i class="bi bi-telephone-fill"></i> Teléfono: ' + phone);
        $('header p:nth-of-type(3)').html('<i class="bi bi-envelope-at-fill"></i> Email: ' + email);
      }
  });
  