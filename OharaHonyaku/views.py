from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.views.generic import View 




# Create your views here.
class IndexView(TemplateView):
    template_name = 'index.html'

# Create your views here.
class LoginView(View):
    def get(self, request):
        return render(request, 'login.html')
    



