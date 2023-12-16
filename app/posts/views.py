from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Post
from .serializers import PostSerializer


class PostList(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class PostDetails(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_serializer_context(self):
        return {'request': self.request}
