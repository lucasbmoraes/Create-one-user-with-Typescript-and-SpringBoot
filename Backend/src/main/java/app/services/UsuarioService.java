package app.services;

import app.entities.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import app.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository repository;

//    private PasswordEncoder passwordEncoder;
//
//    public UsuarioService(UsuarioRepository repository) {
//        this.repository = repository;
//        this.passwordEncoder = new BCryptPasswordEncoder();
//    }

    public String salvar(Usuario usuario) {
//        String senhaEncoder = this.passwordEncoder.encode(usuario.getSenha());
//        usuario.setSenha(senhaEncoder);
        repository.save(usuario);
        return "";
    }
}
