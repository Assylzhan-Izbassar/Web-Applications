from django.urls import path
from rest_framework import routers
from .views import PostList, PostDetails


urlpatterns = [
    path('', view=PostList.as_view()),
    path('<int:pk>', view=PostDetails.as_view()),
]
