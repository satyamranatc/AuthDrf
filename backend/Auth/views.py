from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserModel
from .serializer import UserSerializer

# Create your views here.


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['POST'])
def login(request):
    username = request.data['username']
    password = request.data['password']

    user = UserModel.objects.filter(username=username, password=password).first()
    if user:
        return Response({'message': 'Login successful','user':UserSerializer(user).data})
    return Response({'message': 'Login failed'})
