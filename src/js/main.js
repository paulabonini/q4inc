var reportsWidget = {
  options: {
    containerSelector: ".reports",
    template: document.getElementById("template").innerHTML,
  },

  init: function () {
    this.renderReports(reportData || []);
  },

  renderReports: function (reports) {
    var inst = this,
      options = inst.options;

    $(options.containerSelector).html(
      Mustache.render(options.template, reports)
    );
  },
};

reportsWidget.init();
