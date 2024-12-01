from django.urls import path
from .views.user_view import user_view,logout,login
from .views.promotion_card_view import getAllPro
from .views.loyaltyCard_view import update_card,card_view,user_cards
urlpatterns=[
    
    path('users/',user_view,name='get_users'),
    path('logout/',logout,name='logout'),
    path('login/',login,name='login'),

    path('cardpromotions/',getAllPro,name='getAllPro'),

    path('card/<int:id>/',update_card,name='update_card'),
    path('user/<int:userId>/shop/<int:shopId>/card/',card_view,name='card_view'),
    path('user/<int:userId>/card/',user_cards,name='get_user_cards'),

]