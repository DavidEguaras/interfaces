<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/oscuro.css" id="hoja-estilos">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <title>Document</title>
</head>

<body>
    <header></header>

    <main>
        <a class="btn  btn-success  boton m-2 ms-3" href="" onclick="cambiarEstilos('../css/claro.css'); return false">Tema
            Claro</a>
        <a class="btn btn-primary m-2" href="" onclick="cambiarEstilos('../css/oscuro.css'); return false">Tema
            Oscuro</a>

        <div class="container-fluid mt-5">
            <div class="row  ">
                    <%
                       //Primero recoger la lista de la peticion o de la sesión
                       HashMap<Integer, Producto> lista = request.getParameter("lista");
                       for(int i = 1; i <= lista.length(); i++)   {%>
                        <div class="col-2">
                            <div class=\" + " card w-100 h-100 shadow element-" + <%=i%> + " text-center " \">q</div>
                        </div>
                    <%}%>     
            </div>
        </div>
    </main>

    <footer></footer>

    <script src="../js/miJs.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>