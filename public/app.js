var EFSlider = new Class({
  initialize: function() {
    this.slot1 = $('main_spot').getFirst('ul').getFirst('li');
    this.slot2 = $('main_spot').getFirst('ul').getLast('li');
    
    this.slider = new Fx.Tween($('main_spot').getFirst('ul'), {
      property: 'left',
      duration: 700
    });
    
    this.adjustSizes();
    
    window.addEvent('resize', this.adjustSizes);
    
    this.update_photo();
    this.update_photo.periodical(5000, this);
  },
    
  adjustSizes: function() {
    $$('ul').setStyle('width', 2 * window.getSize().x);
    $$('li').setStyle('width', window.getSize().x);
  },
  
  update_photo: function() {
    console.log('fetching...');

    var r = new Request.JSON({
      url: '/latest.js',
      onSuccess: function(p) {
        console.log('fetch successful');

        var current_img = this.slot1.getElement('img');
        var src = '/photos/' + p.photo;

        if (!current_img || src != current_img.get('src')) {
          console.log('append new photo');

          var img = new Element('img', {
            src: '/photos/' + p.photo
          }).inject(this.slot2);

          this.slideToSlot2();
          this.copyToSlot1.delay(1000, this);
        }
      }.bind(this)
    }).get();
  },
  
  slideToSlot2: function() {
    this.slider.start(-1 * this.slot1.getStyle('width').toInt());
  },
  
  jumpToSlot1: function() {
    this.slider.set(0);
  },
  
  copyToSlot1: function() {
    this.slot1.empty();
    this.slot1.adopt(this.slot2.getChildren())
    this.slot2.empty();
    this.jumpToSlot1();
  }
});

$(document).addEvent('domready', function(){
  var efs = new EFSlider();
})