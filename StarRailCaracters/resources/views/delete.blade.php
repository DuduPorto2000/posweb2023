<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/movieForm.css') }}">
    <title>Star Rail</title>
</head>
<body class="d-flex justify-content-center align-items-center min-vh-100 background-body">
    <form action="{{ route('destroy', ['id' => $personagem->id]) }}" method='POST' class="border p-5 rounded background-form">
        @csrf
        <h1 class="mb-5 text-center">DELETAR PERSONAGEM</h1>

        <div class="mb-4">
            <label for="nome">Deseja deletar o personagem?</label>
            <input type="text" name='nome' id='nome' class="form-control" value="{{ $personagem->nome }}">
        </div>

        <button type='submit' class="btn btn-primary w-100">Enviar</button>
    </form>
</body>
</html>