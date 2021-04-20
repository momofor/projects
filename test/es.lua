#!/usr/bin/env lua
Layouts = {"ar" , "dvp" , "fr"}
I = 1

function Ch()
    CurrentLayout = Layouts[I]
    local max = #Layouts
    if I < max then
        I = I + 1
    else
        I = 1
    end
    return CurrentLayout
end

print(Ch())
print(Ch())
print(Ch())
print(Ch())
print(Ch())
print(Ch())
print(Ch())
print(Ch())
