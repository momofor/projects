---- Meta class
--Coolu =  {textuu = "",titleuu = "" }

---- Primary method
--function Coolu:add(u , textuu , titleuu)
    --u = u or {}
    --setmetatable(u , self)
    --self.__index = self
    --self.textuu = textuu or ""
    --self.titleuu = titleuu or ""
    --return u
--end

---- secondary method
--function Coolu:print()
    --print("The text is " , self.textuu)
    --print("The title is " , self.titleuu)
--end
---- custom object
--local me = Coolu:add{textuu =  "Hello" }
--me:print()

Layouts = {"dvp" , "ar"}
I = 1
function ChangeLayout ()
    if I < 2 then
        I = I + 1
    else
        I = 1
    end
    CurrentLayout = Layouts[I]
    return CurrentLayout
end
print(ChangeLayout())
print(ChangeLayout())
print(ChangeLayout())
print(ChangeLayout())
print(ChangeLayout())
print(ChangeLayout())
print(ChangeLayout())
print(ChangeLayout())
print(ChangeLayout())
