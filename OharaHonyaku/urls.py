from django.urls import path
from . import views

#URLconfのURLパターンを逆引きできるようにアプリ名を登録
app_name = "OharaHonyaku"

#urlパターンを登録するためのリスト
urlpatterns =[
    path('',views.IndexView.as_view(),name="index"),
    path(
        'login/',
        views.LoginView.as_view(),
        name='login_detail'
    ),






]