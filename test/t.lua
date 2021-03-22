function SetVar(var , varValue)
    print(varValue)
end

Tableu = {
    me = 3 ,
    you = 1
}

function Ez(table)
    for key, value in pairs(table) do
        SetVar(key ,value)
    end
end


Ez(Tableu)
Ez(Tableu)
Ez(Tableu)
Ez(Tableu)
Ez(Tableu)
