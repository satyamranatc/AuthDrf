from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import UserModel
from .serializer import UserSerializer
import bcrypt


@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    data = request.data.copy()

    # ✅ Hash password (convert bytes → string before saving)
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    data['password'] = hashed_password

    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        user = UserModel.objects.get(username=username)
        refresh_token = RefreshToken.for_user(user)
        return Response({
            'message': 'Registration successful',
            'user': serializer.data,
            'refreshToken': str(refresh_token)
        })
    return Response(serializer.errors, status=400)


@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = UserModel.objects.filter(username=username).first()
    if user:
        # ✅ Check password
        if bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
            refresh_token = RefreshToken.for_user(user)
            return Response({
                'message': 'Login successful',
                'user': UserSerializer(user).data,
                'refreshToken': str(refresh_token)
            })
    return Response({'message': 'Invalid username or password'}, status=401)


