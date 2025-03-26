import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class StudentServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<head><title>Student Information</title>");
        out.println("<link rel='stylesheet' type='text/css' href='styles.css'></head>");
        out.println("<body>");
        out.println("<div class='container'>");
        out.println("<h2>Student Information</h2>");

        out.println("<table id='studentTable'>");
        out.println("<thead>");
        out.println("<tr class='blue-row'>");
        out.println("<th>Name</th>");
        out.println("<th>Age</th>");
        out.println("<th>Course</th>");
        out.println("</tr>");
        out.println("</thead>");
        out.println("<tbody>");

        out.println("<tr class='yellow-row'>");
        out.println("<td>Juan Dela Cruz</td>");
        out.println("<td>20</td>");
        out.println("<td>Computer Engineering</td>");
        out.println("</tr>");

        out.println("<tr>");
        out.println("<td>Maria Santos</td>");
        out.println("<td>19</td>");
        out.println("<td>Information Technology</td>");
        out.println("</tr>");

        out.println("<tr class='yellow-row'>");
        out.println("<td>Carlos Reyes</td>");
        out.println("<td>21</td>");
        out.println("<td>Software Engineering</td>");
        out.println("</tr>");

        out.println("</tbody>");
        out.println("</table>");
        out.println("</div>");
        out.println("</body>");
        out.println("</html>");
    }
}
